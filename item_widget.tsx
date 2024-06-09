"use client";
import { FC } from "react";
import styled from "@emotion/styled";
import { Card } from "react-bootstrap";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const Tagwidget = styled("div")`
  justify-content: center;
  align-item: center;
  position: relative;
  float: left;

  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 2px -2px gray;
  margin-bottom: 2rem;
`;

const Tagdiv = styled("div")`
  padding-left: 28%;
`;

const Tagspan = styled("span")`
  display: flex;
  justify-content: center;
`;

type WidgetProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  inStock: boolean;
};

const Widget: FC = ({ id, name, price, imgUrl, inStock }: WidgetProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Tagwidget>
      <Card className="productImg">
        {inStock === true ? (
          <Card.Img
            variant="top"
            src={imgUrl}
            height="200px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Card.Img
            variant="top"
            src={imgUrl}
            height="200px"
            style={{ objectFit: "cover", filter: "grayscale(1)" }}
          />
        )}
      </Card>
      <Card.Title>
        {inStock == true ? (
          <div>
            <Tagspan>{name} </Tagspan>
            <Tagspan>{price} Baht</Tagspan>
          </div>
        ) : (
          <div>
            <Tagspan style={{ color: "grey" }}>{name} </Tagspan>
            <Tagspan style={{ color: "grey" }}>{price} Baht</Tagspan>
          </div>
        )}
      </Card.Title>

      <Card>
        {quantity === 0 && inStock == true ? (
          <Tagspan>
            {/* first add to cart */}
            <div style={{ padding: "5px" }}>
              <button onClick={() => increaseCartQuantity(id)}>
                + Add to cart
              </button>
            </div>
          </Tagspan>
        ) : quantity === 0 && inStock == false ? (
          <Tagspan>
            <div>
              <div style={{ color: "red", padding: "5px", marginTop: "2px" }}>
                Out of Stock
              </div>
            </div>
          </Tagspan>
        ) : inStock === true ? (
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            <Tagspan>
              <button
                style={{ marginRight: "5px" }}
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div>
                <span>{quantity}</span> in cart
              </div>
              <button
                style={{ marginLeft: "5px" }}
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </Tagspan>
            {/* <Tagspan>
              <button
                style={{ marginTop: "5px" }}
                onClick={() => removeFromCart(id)}
              >
                {" "}
                Remove
              </button>
            </Tagspan> */}
          </div>
        ) : (
          <Tagspan>
            <div>
              <div style={{ color: "red", padding: "5px" }}>Out of Stock</div>
            </div>
          </Tagspan>
        )}
      </Card>
    </Tagwidget>
  );
};

export default Widget;
