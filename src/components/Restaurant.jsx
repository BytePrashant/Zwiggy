const Restaurant = () => {
    return(
        <>
            <div className="restaurant-card flex flex-col box-content border-4 rounded-lg shadow-lg w-56 h-72 p-4 transform transition-transform hover:scale-95">
                <img className="w-full h-1/2 rounded-md" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc" alt="restaurant_image" />
                <div>
                    <p>RES_NAME</p>
                    <p>Ratings</p>
                    <p>Delivery Time</p>
                    <p>Cusines</p>
                    <p>res address</p>
                </div>
            </div>
        </>
    )
}

export default Restaurant;