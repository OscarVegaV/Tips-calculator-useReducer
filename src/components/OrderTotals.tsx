import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOder: () => void
}


export default function OrderTotals({order, tip, placeOder} : OrderTotalsProps) {

    const subtotalAmount = useMemo( () => order.reduce( (total,item) => total+ (item.quantity * item.price), 0 ) , [order] )

    const tipAmount = useMemo( () => subtotalAmount * tip,  [tip, order] )

    const totalAmount = useMemo( () => subtotalAmount + tipAmount, [tip, order] )



    return (

    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Total Value & tips:</h2>
            <p>SubTotal: {' '}
                <span className="font-bold"> { formatCurrency(subtotalAmount) }</span>
            </p>

                <p>Service Charge: {' '}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

                <p>Grand Total: {' '}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
            
        </div>

        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
            disabled={totalAmount === 0}
            onClick={placeOder}    
        >
            Save Order
        </button>
    </>
    )
}
