import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { ProductService } from '../../services/ProductService';
import Loader from '../Loader/Loader';
import { Table, Button } from 'react-bootstrap';
import { ModalType } from '../../types/ModalType';
import ProductModal from '../ProductModal/ProductModal';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';

const ProductTable = () => {
    // contiene los datos recibidos por la API
    const [products, setProducts] = useState<Product[]>([]);
    // muestra el Loader hasta que se reciban los datos de la API
    const [isLoading, setIsLoading] = useState(true);
    // actualiza los datos de la tabla luego de cada operación exitosa
    const [refreshData, setRefreshData] = useState(false);
    
    useEffect(() => {
        // llamar a la funcion para obtener todos los productos declarados en el ProductService 
        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };
        fetchProducts();
    }, [refreshData]);
    
    console.log(JSON.stringify(products, null, 2));
  
    // para inicializar nuevo producto x defecto y evitar undefined
    const initializeNewProduct = (): Product => {
        return {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
        };
    };

    // producto seleccionado pasado como prop al Modal
    const [product, setProduct] = useState<Product>(initializeNewProduct);

    // para manejar el estado del modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState("");

    // logística del modal
    const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    };
  
    return (
        <>
            <Button onClick={() => handleClick("Nuevo producto", initializeNewProduct(), 
            ModalType.CREATE)}>Agregar producto</Button>
            {
                isLoading ? <Loader/> : (
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Imagen</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td><img src={product.image} alt={product.title} style= {{width: '50px'}}/></td>
                                    <td><EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}></EditButton></td>
                                    <td><DeleteButton onClick={() => handleClick("Borrar producto", product, ModalType.DELETE)}></DeleteButton></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
            }
            {showModal && (
                <ProductModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title={title}
                modalType={modalType}
                prod={product}
                refreshData={setRefreshData}
                />
            )}
        </>
    )
}

export default ProductTable;