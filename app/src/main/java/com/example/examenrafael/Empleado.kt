package com.example.examenrafael

import android.os.Parcel
import android.os.Parcelable

data class Empleado(val nombre: String, val pass: String, val imagenUri: String) : Parcelable {
    constructor(parcel: Parcel) : this(
        parcel.readString() ?: "",
        parcel.readString() ?: "",
        parcel.readString() ?: ""
    )

    override fun writeToParcel(parcel: Parcel, flags: Int) {
        parcel.writeString(nombre)
        parcel.writeString(pass)
        parcel.writeString(imagenUri)
    }

    override fun describeContents(): Int = 0

    companion object CREATOR : Parcelable.Creator<Empleado> {
        override fun createFromParcel(parcel: Parcel): Empleado = Empleado(parcel)
        override fun newArray(size: Int): Array<Empleado?> = arrayOfNulls(size)
    }
}
