import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
}


export default function OrderTotals({order} : OrderTotalsProps) {

    const subtotalAmount = useMemo( () => order.reduce( (total,item) => total+ (item.quantity * item.price), 0 ) , [order] )

    return (

    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Total Value & tips:</h2>
            <p>SubTotal: {' '}
                <span className="font-bold"> { formatCurrency(subtotalAmount) }</span>
            </p>

                <p>Service Charge: {' '}
                <span className="font-bold"> $0</span>
            </p>

                <p>Grand Total: {' '}
                <span className="font-bold"> $0</span>
            </p>
            
        </div>

        <button>

        </button>
    </>
    )
}
