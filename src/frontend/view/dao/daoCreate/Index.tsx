import { Backdrop, Box, Button, Chip, CircularProgress, Divider, Stack, TextField, Typography } from '@mui/material';
import { payWithICP } from '@nnsdao/nnsdao-kit/helper/pay';
import { DaoInfo } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import React, { useReducer, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getPayInfo, useCreateAction } from '../../../api/dao_manager';
import { useUpdateDaoInfo } from '../../../api/nnsdao';
import RichText from '../../../components/RichText';
import { useUserStore } from '../../../hooks/userStore';
import style from './style.module.css';
const DaoCreate = () => {
  const steps = [
    {
      label: 'Before You Create',
      description: `Creation needs to consume icp, and the ownership belongs to the creator.`,
    },
    {
      label: 'Complete DAO Information',
      description: 'Complete the required information.',
    },
    // {
    //   label: 'Confirm Creation',
    //   description: `Confirm DAO creation.`,
    // },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepIcon = ({ id = 0, label = '' }) => {
    const active = id <= activeStep;
    return (
      <div className="flex items-center cursor-pointer" onClick={() => setActiveStep(id)}>
        <div className={`${style.stepIcon} ${active ? style.stepIcon_active : null}`}>
          {active ? <div className={style.stepIconDot}></div> : null}
        </div>
        <div className="px-8"> {label}</div>
      </div>
    );
  };
  const ActiveContent = () => {
    const createAction = useCreateAction();
    const navigator = useNavigate();
    const updateAction = useUpdateDaoInfo();
    const initialValue = [
      {
        type: 'paragraph',
        children: [{ text: 'Please enter the introduction about this dao!' }],
      },
    ];
    const editorRef = useRef([]);

    const [form, setFormField] = useReducer(
      (state, { key, value }) => {
        return {
          ...state,
          [key]: value,
        };
      },
      {
        name: '',
        poster: '',
        avatar: '',
        tag: ['nnsdao'] as string[], // store original string
        intro: '',
      } as const
    );

    const userStore = useUserStore();

    const [loadingText, setLoadingText] = useState('');
    const confirm = async () => {
      // validate
      const { name, poster, avatar, tag } = form;
      const params: DaoInfo = {
        name,
        poster,
        avatar,
        tags: tag,
        intro: JSON.stringify(editorRef.current),
        option: [],
      };
      for (const key of Object.keys(params)) {
        if (['option'].includes(key)) {
          continue;
        }
        if (!checkField(key, params[key])) {
          return;
        }
      }
      // console.log('confirm', params);
      try {
        setLoadingText('Getting Payment Information...');
        const payInfo = await getPayInfo().catch(() => null);
        if (!payInfo) {
          toast.error(`Failed getPayInfo`);
          return;
        }
        // params.memo = payInfo.memo;

        setLoadingText('Paying...');
        // transfer
        const blockHeight = await payWithICP(payInfo.amount, payInfo.to, payInfo.memo);
        console.log('blockHeight', blockHeight);
        // params.block_height = BigInt(blockHeight);
        // create
        setLoadingText('Initialize Canister...');
        const data = await createAction.mutateAsync({
          tags: tag,
          memo: payInfo.memo,
          block_height: BigInt(blockHeight),
        });

        console.log('createAction onSuccess', data);
        await updateAction.mutateAsync({ ...params, cid: data.canister_id.toText() });
        setTimeout(() => {
          navigator(`/daos/team/${data.canister_id.toText()}`);
        }, 0);
      } catch (error) {
        console.error('err', error);
      } finally {
        setLoadingText('');
      }
    };
    function checkField(key, value) {
      if (!value || !value?.length) {
        toast.error(`${key} field cannot be empty!`);
        return false;
      }
      return true;
    }
    const deleteLabel = tag => {
      console.log('delete tag', tag);
      setFormField({ key: 'tag', value: form.tag.filter(item => item !== tag) });
    };

    if (activeStep == 0) {
      return (
        <Stack key="create_dao_0" spacing={3}>
          <Typography sx={{ color: '#fff' }} variant="h2">
            Before you create, you should known!
          </Typography>
          <Button size="large" variant="outlined" onClick={() => setActiveStep(1)}>
            CONTINUE
          </Button>
        </Stack>
      );
    }

    function changeForm(key, e) {
      setFormField({ key, value: e.target.value });
      // console.log(key, e);
    }
    function onEnterTag(e) {
      if (e.code === 'Enter') {
        onTagChange(e);
      }
    }
    function onTagChange(e) {
      // changeForm('tag', e);
      const value = e.target.value;
      let newList = form.tag.concat(value?.split(/\s+/).filter(val => val));
      if (newList.length > 3) {
        toast.error('No more then 3 tags!');
        newList = newList.slice(0, 3);
      }
      e.target.value = '';
      setFormField({ key: 'tag', value: newList });
    }

    return (
      <Box key="create_dao_1" component="form">
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center" key="TextField">
            <TextField
              required
              id="name"
              label="DAOs Name"
              key="DaoName"
              placeholder="DAOs Name"
              value={form.name}
              onChange={e => changeForm('name', e)}
            />
            <TextField
              required
              id="poster"
              value={form.poster}
              label="Website"
              key="Poster"
              placeholder="url"
              onChange={e => changeForm('poster', e)}
            />
            <TextField
              required
              value={form.avatar}
              id="avatar"
              label="PFPs"
              key="Avatar"
              placeholder="IC NFTs Url"
              onChange={e => changeForm('avatar', e)}
            />
          </Stack>
          <Divider>Tags</Divider>
          <Stack spacing={1} alignItems="start">
            <TextField
              required
              id="tag"
              fullWidth
              label="Tag"
              placeholder="Please create a tag."
              onKeyDown={e => onEnterTag(e)}
              // onBlur={e => onTagChange(e)}
            />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="flex-start" flexWrap="wrap">
            {form.tag.map((tag, index) => {
              return (
                <Chip color="primary" label={tag} key={`${index}-${tag}`} onDelete={() => deleteLabel(tag)}></Chip>
              );
            })}
          </Stack>
          <Divider>Abstract</Divider>
          {/* <div style={{ background: '#fff' }}> */}
          <RichText
            initialValue={initialValue}
            onChange={val => {
              editorRef.current = val;
            }}></RichText>
          {/* </div> */}
        </Stack>
        <Button sx={{ margin: '16px 0' }} size="large" fullWidth variant="contained" onClick={confirm}>
          Confirm
        </Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={!!loadingText}
          // onClick={() => setLoading(state => !state)}
        >
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <CircularProgress color="inherit" />
            <div>{loadingText}</div>
          </Stack>
        </Backdrop>
        <Toaster></Toaster>
      </Box>
    );
  };
  return (
    <div className="m-auto flex justify-center mt-36">
      <div className="flex flex-col items-start justify-start flex-shrink-0">
        {steps.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-start justify-start flex-shrink-0">
              <StepIcon id={index} label={item.label}></StepIcon>
              {index !== steps.length - 1 ? (
                <div style={{ height: '36px', width: '1px', backgroundColor: '#2d2d2d', marginLeft: '18px' }}></div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="pl-48 flex-grow-0" style={{ width: '600px' }}>
        <ActiveContent key="steps"></ActiveContent>
      </div>
    </div>
  );
};
export default DaoCreate;
