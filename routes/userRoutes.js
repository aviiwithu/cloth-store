import express from 'express';
const router = express.Router();

import { createUser, getAllUser, getUserById, deleteUserById, getUserCart, addtoCart, deleteCartProduct, 
    updateCartItem, getWishlist, addtoWishlist,deleteWishlist,
    userLogin, adminLogin,
} from '../controller/user.js'

import {userAuth} from '../middlewares/userAuth.js';
import { adminAuth } from '../middlewares/adminAuth.js';

router.route('/').
    post(createUser).
    get(getAllUser);

router.route('/cart').
    get(userAuth, getUserCart).
    post(userAuth, addtoCart).
    delete(userAuth, deleteCartProduct).
    patch(userAuth, updateCartItem);

router.route('/wishlist').
    get(userAuth, getWishlist).
    post(userAuth, addtoWishlist).
    delete(userAuth, deleteWishlist)

router.route("/:id").
    get(getUserById).
    delete(deleteUserById);

router.route('/login').
    post(userLogin);

router.route('/adminlogin').
    post(adminLogin);

export default router;