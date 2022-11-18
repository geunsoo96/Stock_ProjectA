import Detail from "./Detail";
import { useParams } from 'react-router-dom';

const SubDetail = (props:any) =>{
  const { code } = useParams();
  return <Detail key={code} {...props}/>
}
export default SubDetail