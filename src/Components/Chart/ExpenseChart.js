import Chart from "./Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "Jun", value: 5 },
    { label: "Jul", value: 6 },
    { label: "Aug", value: 7 },
    { label: "Sep", value: 8 },
    { label: "Oct", value: 9 },
    { label: "Nov", value: 10 },
    { label: "Dec", value: 11 },
  ];

  for (const expenses of props.expenses) {
    const expenseMonth = expenses.date.getMonth();
    chartDataPoints[expenseMonth].value += expenses.amount;
  }
  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
};

export default ExpenseChart;
