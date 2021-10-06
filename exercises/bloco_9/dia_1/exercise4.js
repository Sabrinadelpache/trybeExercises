const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};


const sendMarsTemperature = ((callTemperature, callTimeout) => {
  const message = `Mars temperature is: ${callTemperature} degree Celsius`;
  const previousMessage = `Soon the temperature will be informed`
  console.log(previousMessage)
  setTimeout(() => console.log(message), callTimeout)

});


sendMarsTemperature(getMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo