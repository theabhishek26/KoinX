//to generate data for plotting in graph
const generateMockData = (points = 1000) => {
  const labels = [];
  const data = [];
  let price = 42000;

  //generate mock data
  for (let i = 0; i < 1000; i++) {
    labels.push(`T${i}`);
    price += (Math.random() - 0.5) * 500; // Random fluctuation
    price>42000?price=42000:price=price; //to set max value
    data.push(price);
  }
  return { labels, data };
};

export default generateMockData;