import {IconButton ,Typography,Tooltip,Dialog,DialogTitle,DialogContent,DialogContentText,
    TextField,FormControl,InputLabel,Select,MenuItem
} from '@material-ui/core';
import styled from 'styled-components';

const ProductForm = (props) => {
    const {title ,children, openPopup, setOpenPopup} = props;
    return (
        <>
        <FormWrapper>
          <TextField variant="standard" size="small" placeholder="product name" />
          <Select className="category" label="Category">
            <InputLabel >male</InputLabel>
            <InputLabel >women</InputLabel>
          </Select>
          <Select className="category" label="sub-Category">
            <InputLabel >male</InputLabel>
            <InputLabel >women</InputLabel>
          </Select>
        </FormWrapper>
        </>
    )
}

export default ProductForm

const FormWrapper = styled.form`
.category{
  width: 10%;
  margin:0 10px;
}
`