import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ["latin"] });




// import { useEffect, useState } from 'react';

export default function TestApi() {
  const [activity, setActivity] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch('/api/api');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {


    fetchData();
  }, []);

  const handleRefreshClick = () => {
    fetchData();
  };

  return (
    <div className="container-fluid">
      <h1 className="h2 text-center my-5 text-primary fw-bold">Financial Quotes</h1>
      <div className="row text-center" style={{ backgroundColor: 'orange', height: 'auto', width: '900px', margin: '0 auto' }}>
        {activity ? (
          <div className='text-primay '>
            <h2>Activity:</h2>
            <h5 className='text-secondary h5'>{activity}</h5>
          </div>
        ) : (
          <p>Loading Data...</p>
        )}
      </div>
      <div className="col text-center">
        <button type="button" className="btn btn-primary my-5" onClick={handleRefreshClick}>
          Refresh
        </button>
      </div>
    </div>
  );
}
