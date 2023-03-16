import classes from "./RowItem.module.css";

function RowItem(props) {
    return (
        <div >
            <img 
            className={`${classes.row_poster} ${props.isLargeRow && classes.row_posterLarge}`}
            src={`https://image.tmdb.org/t/p/original${props.imgURL}`} 
            alt={props.name}/>
            {/* <div>
                <h1>{props.name}</h1>
            </div> */}
        </div>
    );
}

export default RowItem;