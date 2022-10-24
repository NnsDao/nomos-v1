import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDaoInfo } from '../../../../api/nnsdao';
import RichText from '../../../../components/RichText';

const About = () => {
  const { cid = '' } = useParams();
  const daoInfo = useGetDaoInfo(cid);
  if (daoInfo.isFetching || !daoInfo.data) {
    return (
      <Box className="flex justify-center items-center" sx={{ textAlign: 'center' }}>
        <CircularProgress size={24} />
      </Box>
    );
  }
  return (
    <Box>
      {/* @ts-ignore */}
      <RichText initialValue={JSON.parse(daoInfo.data?.intro ?? [])}></RichText>
    </Box>
  );
};
export default About;
