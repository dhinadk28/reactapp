//import & Export - 2 types
//1. named - Import & Export - Prefered
//2. default - Import & Export - Only one can be exported


//Create ColorBox component
//named - Import & Export 
//  function ColorBox({color}){
//     const styles = {
//       backgroundColor: color,
//       height: "35px",
//       width: "300px",
//       marginTop: "10px",
//     };


export default function ColorBox({ color }) {
    const styles = {
        backgroundColor: color,
        height: "35px",
        width: "300px",
        marginTop: "10px",
    };

    return ( <div style = { styles } > </div>
    )
}