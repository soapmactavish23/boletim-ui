export default class ProductService {

    getProductsSmall() {
		return fetch('').then(res => res.json()).then(d => d.data);
	}

	getProducts() {
		return fetch('').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('').then(res => res.json()).then(d => d.data);
	}
}