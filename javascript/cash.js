// chart pie
var chart1 = c3.generate({
    bindto:'#chart1',
    data:{
        columns: [
            ['Employer Sponsored', 29261],
            ['Regional', 23372],
            ['Skilled Independent',12986],
            ['Business Innovation and Investment',4420],
            ['Global Talent(Independent)',4109]
        ],
        type : 'pie',
    }
})




const url ='data/cash_export.json'
axios.get(url).then((res) => {
    const data = res.data
    let years = [],NTD = [],AUD = [],CNY = [],SGD = [],EUR = []
    for(let i in data){
        years.push(Object.values(data[i])[0]) //年度
        NTD.push(Object.values(data[i])[1]) //台幣
        AUD.push(Math.round(Object.values(data[i])[8]/NTD[i]*1000)) //澳幣
        CNY.push(Math.round(Object.values(data[i])[2]/NTD[i]*1000)) //人民幣
        SGD.push(Math.round(Object.values(data[i])[7]/NTD[i]*1000)) //英鎊
        EUR.push(Math.round(Object.values(data[i])[6]/NTD[i]*1000)) //歐元
    }
    years = years.slice(8,years.length) //del 前8筆 抓2005~2020
    years.unshift('年度')
    NTD = NTD.slice(8,NTD.length)
    NTD.unshift('台幣')
    AUD = AUD.slice(8,AUD.length)
    AUD.unshift('澳幣')
    CNY = CNY.slice(8,CNY.length)
    CNY.unshift('人民幣')
    SGD = SGD.slice(8,SGD.length)
    SGD.unshift('英鎊')
    EUR = EUR.slice(8,EUR.length)
    EUR.unshift('歐元')
    // chart line
    var chart = c3.generate({
        padding:{
            right:10,
            left:25
        },
        data: {
            x:'年度',
            columns: [
                years,AUD,CNY,SGD,EUR
            ],
        },
        regions: [
            // x
            {axis: 'x', start: 2000, end: 2003, class: 'regionX'},
            {axis: 'x', start: 2006, end: 2009, class: 'regionX'},
            {axis: 'x', start: 2012, end: 2015, class: 'regionX'},
            {axis: 'x', start: 2018, class: 'regionX'},
            // y
            {axis: 'y', end: 120, class: 'regionY'},
            {axis: 'y', start: 60, class: 'regionY2'},
        ],
    });
}).catch((err) => {
    console.log(err)
})