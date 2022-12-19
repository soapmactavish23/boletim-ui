<template>
	
    <div>
        <div class="card">
            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="custom-carousel" :circular="true" :autoplayInterval="3000">
                <template #header>
                    <h5>Testando Banner Rotativo</h5>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://assets.infra.grancursosonline.com.br/projeto/sespa-secretaria-de-estado-de-saude-publica-do-estado-do-para.jpg" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.name}}</h4>
                                <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6>
                                <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                                <div class="car-buttons mt-5">
                                    <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                                    <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
	</div>
</template>
<Carousel :value="cars" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="3000">
	
	
</Carousel>
	


<script>
import ProductService from '../../service/product/ProductService';

export default {
	data() {
		return {
            products: null,
			responsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
				},
				{
					breakpoint: '600px',
					numVisible: 2,
					numScroll: 2
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
		}
	},
    productService: null,
	created() {
        this.productService = new ProductService();
	},
	mounted() {
        this.productService.getProductsSmall().then(data => this.products = data.slice(0,9));
	}
}
</script>

<style lang="scss" scoped>
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
    }

    .product-image {
        width: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
</style>