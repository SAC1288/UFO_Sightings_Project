displayData(data);
d3.selectAll('input').on('change',displayData);

function displayData(data) {
    let filter = data;
    console.log(filter);
    d3.select('.tbody').html('');
    d3.selectAll('input')._groups[0].forEach(({id,value})=> value ? filter = filter.filter(obj => obj[id] == value) : '');

    filter.forEach(obj => {
        let row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>row.append('td').text(val))
    });
};