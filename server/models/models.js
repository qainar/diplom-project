const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, required: true },
    name: { type: DataTypes.STRING, required: true },
    password: { type: DataTypes.STRING, required: true },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
})



const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

})

const BasketCourse = sequelize.define('basket-course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

})

const Course = sequelize.define('course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.STRING, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
    small: { type: DataTypes.STRING, allowNull: false }
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.STRING, allowNull: false },
})

const CourseInfo = sequelize.define('course-info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
})

const TypeBrand = sequelize.define('type-brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})


const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull:false},
    description: {type: DataTypes.STRING, allowNull:false},
    text: {type: DataTypes.TEXT, allowNull:false}
})

User.hasOne(Basket)
Basket.belongsTo(User)



User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCourse)
BasketCourse.belongsTo(Basket)

Type.hasMany(Course)
Course.belongsTo(Type)

Brand.hasMany(Course)
Course.belongsTo(Brand)

Course.hasMany(Rating)
Rating.belongsTo(Course)

Course.hasMany(BasketCourse)
BasketCourse.belongsTo(Course)

Course.hasMany(CourseInfo, { as: 'info' })
CourseInfo.belongsTo(Course)

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })


module.exports = {
    User,
    Basket,
    BasketCourse,
    Course,
    Type,
    Brand,
    Rating,
    TypeBrand,
    CourseInfo,
    News
}