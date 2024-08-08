export default async function deleteData(id: number) {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
}