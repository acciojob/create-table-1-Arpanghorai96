function insert_Row() {
    //Write your code here
	const table=document.getElementById("sampleTable");
    var tr=table.insertRow(0);
    var td1=tr.insertCell(0)
    var td2=tr.insertCell(1)
    td1.innerText="New Cell"
    td2.innerText="New Cell2"
	
}
