import React from "react";
export default class FetchData extends React.Component {
  state = {
    loading: true,
    person: null
  };                                                         
    async componentDidMount() {  fetch( "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key":  "aaf68c6fefmsh0e8a694edd6f1dap103bd5jsnde917fa3f6fe",
    "content-type": "application/json",
    "accept": "application/json"
  },  
})
.then(response => response.json())
.then(response => {
  this.setState({ data: response , loading: false});
  console.log(response.value)
})
.catch(err => {
  console.log(err);
});                 
 }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.data) {
      return <div>didn't get a data</div>;
    }
    return (
     <div className="body">        
        <div>{this.state.data.value[0].name}</div>
        <h1>{this.state.data.value[0].description}</h1>
        <img src="https://www.bing.com/th?id=ON.21907F5439CACA766AB856D80DA333CB&pid=News" /> 

        <div>{this.state.data.value[1].name}</div>
        <h1>{this.state.data.value[1].description}</h1>
        <img src="https://www.bing.com/th?id=ON.31E91025A130F118FA7A0D24AF0CB03B&pid=News" />

        <div>{this.state.data.value[2].name}</div>
        <h1>{this.state.data.value[2].description}</h1>
        <img src="https://www.bing.com/th?id=ON.69AC7C731C672EB2B129C8582115472B&pid=News" />

        <div>{this.state.data.value[3].name}</div>
        <h1>{this.state.data.value[3].description}</h1>
        <img src="https://www.bing.com/th?id=ON.C2C73CA07D5F24FE3BBB0E27883E2D39&pid=News" />

        <div>{this.state.data.value[4].name}</div>
        <h1>{this.state.data.value[4].description}</h1>
        <img src="https://www.bing.com/th?id=ON.266AADBF5A8163E6D9030B411DF1E009&pid=News" />

        <div>{this.state.data.value[5].name}</div>
        <h1>{this.state.data.value[5].description}</h1>
        <img src="https://www.bing.com/th?id=ON.9D5AA8FC28784C6640CAD38805E8E481&pid=News" />

        <div>{this.state.data.value[6].name}</div>
        <h1>{this.state.data.value[6].description}</h1>
        <img src="https://www.bing.com/th?id=ON.30396369541385F771281235AF97B7C3&pid=News" />

        <div>{this.state.data.value[7].name}</div>
        <h1>{this.state.data.value[7].description}</h1>
        <img src="https://www.bing.com/th?id=ON.5A227F815F02E315A26FF796A65EDAD9&pid=News" />

        <div>{this.state.data.value[8].name}</div>
        <h1>{this.state.data.value[8].description}</h1>
        <img src="https://www.bing.com/th?id=ON.B8352A39FDFE234D46AFCFFE59DE7BEC&pid=News" />

        <div>{this.state.data.value[9].name}</div>
        <h1>{this.state.data.value[9].description}</h1>
        <img src="https://www.bing.com/th?id=ON.B7CFB310776D08084EF39591F1144E71&pid=News" />
        
        <div>{this.state.data.value[10].name}</div>
        <h1>{this.state.data.value[10].description}</h1>
        <img src="https://www.bing.com/th?id=ON.8DABF0C56637C7629CF5B073892D9CCF&pid=News" />

        <div>{this.state.data.value[11].name}</div>
        <h1>{this.state.data.value[11].description}</h1>
        <img src="https://www.bing.com/th?id=ON.52890437AE65209470506BE0D9A44EC1&pid=News" />

        <div>{this.state.data.value[12].name}</div>
        <h1>{this.state.data.value[12].description}</h1>
        <img src="https://www.bing.com/th?id=ON.B7303C2BC36484139EFF5BB689590912&pid=News" />

        <div>{this.state.data.value[13].name}</div>
        <h1>{this.state.data.value[13].description}</h1>
        <img src="https://www.bing.com/th?id=ON.E91E2E6F6FB93DA7CCCE84384030D1F0&pid=News" />

        <div>{this.state.data.value[14].name}</div>
        <h1>{this.state.data.value[14].description}</h1>
        <img src="https://www.bing.com/th?id=ON.3367F9185B0BC0B40A81F6879C2386D3&pid=News" />

        <div>{this.state.data.value[15].name}</div>
        <h1>{this.state.data.value[15].description}</h1>
        <img src="https://www.bing.com/th?id=ON.80DBC6504E3A66F0D58D10063D7EF38C&pid=News" />

        <div>{this.state.data.value[16].name}</div>
        <h1>{this.state.data.value[16].description}</h1>
        <img src="https://www.bing.com/th?id=ON.C9FD150C335BF5EE3607A3996ADF1835&pid=News" />

        <div>{this.state.data.value[17].name}</div>
        <h1>{this.state.data.value[17].description}</h1>
        <img src="https://www.bing.com/th?id=ON.740AA9C74C18782041C934B3E35D1F2D&pid=News" />

        <div>{this.state.data.value[18].name}</div>
        <h1>{this.state.data.value[18].description}</h1>
        <img src="https://www.bing.com/th?id=ON.F2F53561975E6F1902135F9EF4FAC3D0&pid=News" />


        <div>{this.state.data.value[19].name}</div>
        <h1>{this.state.data.value[19].description}</h1>
        <img src="https://www.bing.com/th?id=ON.DD640C1E1C465D903129C467AD2D61A8&pid=News" />

        <div>{this.state.data.value[20].name}</div>
        <h1>{this.state.data.value[20].description}</h1>
        <img src="https://www.bing.com/th?id=ON.4024FD3BD5A6D6F7FF359C599F2671A9&pid=News" />

        <div>{this.state.data.value[21].name}</div>
        <h1>{this.state.data.value[21].description}</h1>
        <img src="https://www.bing.com/th?id=ON.7DFD67A55809666A9051A250699E6A0A&pid=News" />

        <div>{this.state.data.value[22].name}</div>
        <h1>{this.state.data.value[22].description}</h1>
        <img src="https://www.bing.com/th?id=ON.D829F781020F463492FED4620C2B1B17&pid=News" />

        <div>{this.state.data.value[23].name}</div>
        <h1>{this.state.data.value[23].description}</h1>
        <img src="https://www.bing.com/th?id=ON.A0D55FD09C040099DC04010AFECAE386&pid=News" />

        <div>{this.state.data.value[24].name}</div>
        <h1>{this.state.data.value[24].description}</h1>
        <img src="https://www.bing.com/th?id=ON.5BC31956E860E639ED04C8369FD5415E&pid=News" />

        <div>{this.state.data.value[25].name}</div>
        <h1>{this.state.data.value[25].description}</h1>
        <img src="https://www.bing.com/th?id=ON.9EFA6697EA2A480B658716E6E5940FAC&pid=News" />

        <div>{this.state.data.value[26].name}</div>
        <h1>{this.state.data.value[26].description}</h1>
        <img src="https://www.bing.com/th?id=ON.8D5C8FCF5FB67AB172EBBFD36CBF6321&pid=News" />

        <div>{this.state.data.value[27].name}</div>
        <h1>{this.state.data.value[27].description}</h1>
        <img src="https://www.bing.com/th?id=ON.C7F4E05A0170F04682A7818013296741&pid=News" />

        <div>{this.state.data.value[28].name}</div>
        <h1>{this.state.data.value[28].description}</h1>
        <img src="https://www.bing.com/th?id=ON.8833FA8268359173380AF42247FC5D8D&pid=News" />

        <div>{this.state.data.value[29].name}</div>
        <h1>{this.state.data.value[29].description}</h1>
        <img src="https://www.bing.com/th?id=ON.80FD5EAB7BDD87D93D5B9CF6AC3A3E85&pid=News" />

        <div>{this.state.data.value[30].name}</div>
        <h1>{this.state.data.value[30].description}</h1>
        <img src="https://www.bing.com/th?id=ON.98961A9877A93AB208EDFDF1B9816213&pid=News" />

        <div>{this.state.data.value[31].name}</div>
        <h1>{this.state.data.value[31].description}</h1>
        <img src="https://www.bing.com/th?id=ON.B23F987F62363D0A5BC39166A111E362&pid=News" />

        <div>{this.state.data.value[32].name}</div>
        <h1>{this.state.data.value[32].description}</h1>
        <img src="https://www.bing.com/th?id=ON.04D0976A4D93C8449CEBD56257C0416C&pid=News" />

        <div>{this.state.data.value[33].name}</div>
        <h1>{this.state.data.value[33].description}</h1>
        <img src="https://www.bing.com/th?id=ON.E503A2E972C0CC6618ED2108BB95D06C&pid=News" />

        <div>{this.state.data.value[34].name}</div>
        <h1>{this.state.data.value[34].description}</h1>
        <img src="https://www.bing.com/th?id=ON.D340B6FE369C5D67284B123B2971AFAC&pid=News" />

        <div>{this.state.data.value[35].name}</div>
        <h1>{this.state.data.value[35].description}</h1>
        <img src= "https://www.bing.com/th?id=ON.98EC4A2A4F87FD29901FE50B3D3FE56C&pid=News" />

      </div>      
    );
  }
}