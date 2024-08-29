"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const AddWishlist = async (id: string) => {
  "use server"

    const res = await fetch('http://localhost:3000' + '/api/wishlist', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookies().toString()
      },
      body: JSON.stringify({
        productId: id
      })
    })

    const result = await res.json()

    if(!res.ok) {
      console.log(result)
      console.log(res)
      return redirect("/")
    }

    return redirect("/wishlist")
}