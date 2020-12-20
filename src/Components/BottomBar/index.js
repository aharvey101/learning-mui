import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
}

function BottomBar() {
  const style = {
    background: '#C4C4C4',
    gridArea: 'bottomBar',
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 20,
    box: {
      height: '15rem',
      width: '20rem',
      background: 'white',
    },
  }
  return (
    <div style={style}>
      <div style={style.box}>
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 10,
            },
            legend: {
              display: true,
              position: 'right',
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div style={style.box}>
        {/* <div> */}
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 10,
            },
            legend: {
              display: true,
              position: 'right',
            },
            maintainAspectRatio: false,
          }}
        />
        {/* </div> */}
      </div>
    </div>
  )
}

export default BottomBar
