import { Box, Button, Chip, Divider, Stack, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import RichText from '../../../components/RichText';
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
  const [tagList, setTagList] = React.useState([]);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
  const confirm = () => {
    console.log('confirm', editorRef.current);
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
  const deleteLabel = tag => {
    setTagList(list => list.filter(item => item !== tag));
  };
  const ActiveContent = () => {
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

    return (
      <Box key="create_dao_1" component="form" noValidate>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center" key="TextField">
            <TextField required id="name" label="DaoName" placeholder="DaoName" />
            <TextField required id="poster" label="poster" placeholder="http://xxx" />
            <TextField required id="avatar" label="Avatar" placeholder="http://xxx" />
          </Stack>
          <Divider>
            <Chip label="Tags" />
          </Divider>
          <Stack spacing={1} alignItems="start" key="tag">
            <TextField required id="tag" label="Tag" onChange={e => console.log(e)} />

            {tagList.map((tag, index) => {
              return <Chip color="primary" label={tag} key={index} onDelete={() => deleteLabel(tag)}></Chip>;
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
            <>
              <StepIcon id={index} label={item.label}></StepIcon>
              {index !== steps.length - 1 ? (
                <div style={{ height: '36px', width: '1px', backgroundColor: '#2d2d2d', marginLeft: '18px' }}></div>
              ) : null}
            </>
          );
        })}
      </div>
      <div className="pl-48 flex-grow-0" style={{ width: '600px' }}>
        <ActiveContent></ActiveContent>
      </div>
    </div>
  );
};
export default DaoCreate;
