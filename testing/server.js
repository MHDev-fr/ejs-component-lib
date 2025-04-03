import express from 'express'
const app = express()
const path = process.argv.slice(2)[0]
const id = process.argv.slice(3)[0]
const getOptions = process.argv.slice(4)
const options = []
getOptions.forEach(
    o => {
        const el = o.split('/')
        options.push(...el)
    }
)
// const obj = {
//     component:path,
//     component_options:{}
// }
// for(const option of options)
//     obj.component_options[option.split('=')[0]] = option.split('=')[1]
const obj = {
    component:path,
    component_options:[]
}
for(const option of options)
    obj.component_options.push([option.split('=')[0],option.split('=')[1]])

console.log("Component path & options = ", {path : obj.component,id : id, comp_options : obj.component_options});
app.set('view engine', 'ejs')
app.get('/', (req,res)=> res.render('test.ejs', {path : obj.component, id : id, comp_options : obj.component_options}))
app.listen(8080)