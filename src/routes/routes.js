import { addnewProduct } from '../controllers/controllers'

const routes = (app) => {
    app.route('/proucts')

        // Post EndPoint
        .post(addnewProduct)
}

export default routes