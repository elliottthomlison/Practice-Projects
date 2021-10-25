const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the product/s name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters'],
    }, 
    price: {
        type: Number,
        required: [true, 'Please enter the product/s price'],
        maxLength: [5, 'Product price cannot exceed 100 characters'],
        default: 0.0,
    }, 
    name: {
        type: String,
        required: [true, 'Please enter the product/s description'], 
    }, 
    rating: {
        type: Number,
        default: 0.0,
    }, 
    images: [
        {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select the product/s category'],
        enum: {
            values: [
                'Cameras',
                'Laptops', 
                'Accessories',
                'Headphones',
                'Books',
                'Clothing'
            ],
            messages: 'Please select the correct category',
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter the product/s seller'],
    },
    stock: {
        type: Number,
        required: [true, 'Please enter the product/s stock number'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.
    },
    numberOfReviews: {
        type: Number,
        default: 0.
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Product', productSchema);