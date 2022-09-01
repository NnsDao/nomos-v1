import { Alert, Box, Button, Chip, Divider, Snackbar, Stack, TextField, Typography } from '@mui/material';
import React, { useReducer, useRef, useState } from 'react';
import RichText from '../../../components/RichText';
import style from './style.module.css';

const DaoCreate = () => {
  const [snackBarStr, setSnackBarStr] = useState('');
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
    const initialValue = [
      {
        type: 'paragraph',
        children: [
          // { text: 'This is editable ' },
          // { text: 'rich', bold: true },
          // { text: ' text, ' },
          // { text: 'much', italic: true },
          // { text: ' better than a ' },
          // { text: '<textarea>', code: true },
          { text: 'Please enter the introduction about this dao!' },
        ],
      },
      // {
      //   type: 'paragraph',
      //   children: [
      //     {
      //       text: "Since it's rich text, you can do things like turn a selection of text ",
      //     },
      //     { text: 'bold', bold: true },
      //     {
      //       text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      //     },
      //   ],
      // },
      // {
      //   type: 'block-quote',
      //   children: [{ text: 'A wise quote.' }],
      // },
      // {
      //   type: 'paragraph',
      //   align: 'center',
      //   children: [{ text: 'Try it out for yourself!' }],
      // },
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
        tag: [] as string[], // store original string
        intro: '',
      } as const
    );

    const confirm = () => {
      // validate
      const { name, poster, avatar, tag } = form;
      const params = {
        name,
        poster,
        avatar,
        tag,
        intro: editorRef.current,
      };
      for (const key of Object.keys(params)) {
        if (!checkField(key, params[key])) {
          return;
        }
      }
      console.log('confirm', params);
    };
    function checkField(key, value) {
      if (!value || !value?.length) {
        setSnackBarStr(`${key} field cannot be empty!`);
        return false;
      }
      return true;
    }
    const deleteLabel = tag => {
      setFormField({ key: 'tag', value: form.state.tag.filter(item => item !== tag) });
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
        setSnackBarStr('The maximum number of tags is 3');
        newList = newList.slice(0, 3);
      }
      setFormField({ key: 'tag', value: newList });
    }

    return (
      <Box key="create_dao_1" component="form">
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center" key="TextField">
            <TextField
              required
              id="name"
              label="DaoName"
              key="DaoName"
              placeholder="DaoName"
              value={form.name}
              onChange={e => changeForm('name', e)}
            />
            <TextField
              required
              id="poster"
              value={form.poster}
              label="Poster"
              key="Poster"
              placeholder="http://xxx"
              onChange={e => changeForm('poster', e)}
            />
            <TextField
              required
              value={form.avatar}
              id="avatar"
              label="Avatar"
              key="Avatar"
              placeholder="http://xxx"
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
              placeholder="Metaverse web3 xxx"
              onKeyDown={e => onEnterTag(e)}
              onBlur={e => onTagChange(e)}
            />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="flex-start" flexWrap="wrap">
            {form.tag.map((tag, index) => {
              return <Chip color="primary" label={tag} key={tag} onDelete={() => deleteLabel(tag)}></Chip>;
            })}
          </Stack>
          <Divider>Intro</Divider>
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
      </Box>
    );
  };
  return (
    <div className="m-auto flex justify-start pt-16">
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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!snackBarStr}
        autoHideDuration={6000}
        onClose={() => setSnackBarStr('')}
        message={snackBarStr}>
        <Alert severity="warning" onClose={() => setSnackBarStr('')}>
          {snackBarStr}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default DaoCreate;
