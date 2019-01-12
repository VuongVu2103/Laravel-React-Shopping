import React from 'react'

class Page extends React.Component {
    render() {
        let { item } = this.props;
        return (
            <tr>
                <td><img alt="50x50" src={require("../../../../images/portfolio/" + item.products.product_id + '-1.jpg')} className="img-responsive" width = "60" height = "60" /> </td>
                <td>{item.products.name}</td>
                <td>In stock</td>
                <td>{item.quantity}</td>
                <td>{this.showSubTotal(item.products.price.$numberDouble, item.quantity)}</td>
                <td className="text-right">
                    <button className="btn btn-sm btn-danger" onClick = {() => {this.onDelete(item.products)}}>
                        <i className="fa fa-trash" />
                    </button>
                </td>
            </tr>
        );

    }
    showSubTotal(price,quantity){
            return price * quantity;
    }

    onDelete(products){
        console.log(products);
        var {onDeleteProduct} = this.props;
        onDeleteProduct(products);
    }
}

export default Page