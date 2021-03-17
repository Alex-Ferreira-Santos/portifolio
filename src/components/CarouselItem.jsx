export function CarouselItem(props){
    return(
        <div style={{textAlign:'center'}}>
            <a href={props.img} target='_blank' rel='noopener noreferrer'>
                <img src={props.img} alt={props.alt} className={props.classNa}/>
            </a>
        </div>
    )
}