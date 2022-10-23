var items = [{name: "tophat", price: 100}, {name: "beret", price:500}];

const Shop = () => {
    return(
    <div>shop
        <br/>

        <ul style={{display: "flex", flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>{items.map(item => {
            return(<li key={item.name} style={{background: "blue"}}>
                {item.name}
                <br/>
                <b style={{color: "gold"}}>{item.price}</b>
            </li>);
        })}</ul>
    </div>
    );
}

export default Shop;