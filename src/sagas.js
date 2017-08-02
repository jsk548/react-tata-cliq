import Product from './containers/PDP/sagas';

export default function* AppSaga () {
  yield [
  	Product() ,
  ]
}
