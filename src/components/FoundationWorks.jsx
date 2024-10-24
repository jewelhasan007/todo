import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';

const FoundationWorks = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
       fetch('user.json')
       .then(res=>res.json())
       .then(data => {console.log(data);
        setProducts(data)
       })
    }, []);

    return (
      <div>

<div className="card">
            {/* <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable> */}

<DataTable className='p-3 m-4' value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
    <Column field="id" header="Id" style={{ width: '20%' }}></Column>
    <Column field="code" header="Code" style={{ width: '25%' }}></Column>
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="category" header="Category" style={{ width: '25%' }}></Column>
    <Column field="quantity" header="Quantity" style={{ width: '25%' }}></Column>
</DataTable>
        </div>
      </div>
    );
};

export default FoundationWorks;