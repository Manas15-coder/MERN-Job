import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <>
      <section id='banner'>
        <div className='container'>
          <div className='row'>
            <div className='banner-content'>

            </div>
            <div className='col-md-7'>
              <h1 className='display-1' style={{fontWeight:'bold',color:'#ffff'}}>Get Your Dream Job !</h1>
              <h6 className="display-6" style={{fontWeight:'500',color:'#f3f4f5'}}><ReactTypingEffect
                text={["Explore all the most exciting job roles based on your interest and study major."]}
              /></h6>
              <div className='d-flex' style={{ marginTop: '5%' }}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' className='company-logo' height={'40px'} alt='Facebook' />
                <img src='https://www.pngplay.com/wp-content/uploads/3/Black-Apple-Logo-PNG-Images-HD.png' className='company-logo' height={'40px'} alt='Apple' />
                <img src='https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=163252369' className='company-logo' height={'40px'} alt='Amazon' />
                <img src='https://pngimg.com/uploads/netflix/netflix_PNG10.png' className='company-logo' height={'40px'} alt='Netflix' />
                <img src='https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227' className='company-logo' height={'40px'} alt='Google' />
              </div><br /><br />
              <Link to='/all-jobs'><Button sx={{ backgroundImage: 'linear-gradient(135deg, #F48617, #EDA83C);', border: 0, borderRadius: 3, color: '#ffff', padding: '10px 20px', maxWidth: '450px', width: '100%' }}>Apply Now</Button></Link>

            </div>
            <div className='col-md-5'>
              <img src='https://static.vecteezy.com/system/resources/previews/014/435/734/original/remote-job-or-distance-work-illustration-png.png' className='banner img-fluid' height={'100px'} alt='banner' />
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Home;
