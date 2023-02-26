import {withBemMod} from "@bem-react/core";
import {cnProduct} from "~/client/shared/components/product/product.const";
import {IProductProps} from "~/client/shared/components/product/product";
import './product_variant_profile.css';


interface IProductVariantProfileProps {
    variant?: "profile"
}

export const withProductVariantProfile = withBemMod<IProductVariantProfileProps, IProductProps>(
    cnProduct(),
    {variant: "profile"},
    (Product) => props => <Product {...props}/>
);