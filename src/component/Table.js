import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch} from 'react-redux';

const ProductTable = ({products,setProductId,openModal, deleteProduct }) => {
    const dispatch = useDispatch();
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name </TableCell>
                        <TableCell> category</TableCell>
                        <TableCell>sub-Category </TableCell>
                        <TableCell> image</TableCell>
                        <TableCell>thumbImage </TableCell>
                        <TableCell>color </TableCell>
                        <TableCell>size </TableCell>
                        <TableCell>price </TableCell>
                        <TableCell>description </TableCell>
                        <TableCell>Action </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item)=>(
                        <TableRow key={item._id} >
                            <TableCell>
                                {item.name}
                            </TableCell>
                            <TableCell>
                                {item.category}
                            </TableCell>
                            <TableCell>
                                {item.subCategory}
                            </TableCell>
                            <TableCell>
                                <img style={{height:'100px'}} src={item.image} alt=""/> 
                            </TableCell>
                            <TableCell>
                            <img style={{height:'100px'}} src={item.thumbImage} alt=""/> 
                            </TableCell>
                            <TableCell>
                                {item.color}
                            </TableCell>
                            <TableCell>
                                {item.size}
                            </TableCell>
                            <TableCell>
                                {item.price}
                            </TableCell>
                            <TableCell>
                                {item.description}
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={()=>{setProductId(item._id);openModal(true)}}  ><EditIcon /></IconButton >
                                <IconButton onClick={()=>dispatch(deleteProduct(item._id))}  ><DeleteIcon /></IconButton >
                            </TableCell>

                        </TableRow>
                    ))}
                    

                </TableBody>

            </Table>

            
        </TableContainer>
    )
}

export default ProductTable
