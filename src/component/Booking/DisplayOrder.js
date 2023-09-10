export const DisplayOrder = (props) => {
    console.log(props)

    const renderData = ({ orderData }) => {
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <tr key={item.id} >
                        <td>{item.id}</td>
                        <td>{item.rest_name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.cost}</td>
                        <td>{item.phone}</td>
                    </tr >
                )
            })
        }
    }

return (
    <div className="container">
        <center><h3>Order List</h3></center>
        <table className="table">
            <thead>
                <tr>
                    <th>OrderId</th>
                    <th>Restaurant Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cost</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {renderData(props)}
            </tbody>
        </table>
    </div>
)
}