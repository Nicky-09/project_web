import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";


function Score({ score, timer, withTimer,totalQuestions,gameEnded }) {


    const options = {
  chart: {
    type: "pie",
    height: "300px",
    backgroundColor: "transparent",

  },
  series: [
    {
      data: [
        {
            name: "Total Questions",
          y: totalQuestions*100
        },
        {
            name: "Correct Answers",
          y: score
        }
      ],
      colors: ['red', 'green'],
    }
   
  ]
};

    console.log(totalQuestions)
	return (
		<div className='score-timer-container'>
			{withTimer && (
				<div className='score-timer-border'>
					<div className='score-timer-text'>Timer</div>
					<div className='score-timer-number'>{timer}</div>
				</div>
			)}
			<div>
				<div className='score-timer-text'>Score</div>
				<div className='score-timer-number'>{score}/{totalQuestions}00</div>
			</div>
               {gameEnded? <PieChart highcharts={Highcharts} options={options} />:''}
            
           
		</div>
	)
}

export default Score