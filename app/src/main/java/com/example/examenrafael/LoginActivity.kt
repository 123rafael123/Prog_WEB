package com.example.examenrafael

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.*
import androidx.appcompat.app.AppCompatActivity

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val imgPerfil = findViewById<ImageView>(R.id.imgPerfil)
        val btnLogin = findViewById<Button>(R.id.btnLogin)
        val empleado = intent.getParcelableExtra<Empleado>("empleado")

        if (empleado != null) {
            imgPerfil.setImageURI(Uri.parse(empleado.imagenUri))
        }

        btnLogin.setOnClickListener {
            if (empleado != null) {
                Toast.makeText(this, "Login exitoso", Toast.LENGTH_SHORT).show()
                val intent = Intent(this, MensajeActivity::class.java)
                startActivity(intent)
            } else {
                Toast.makeText(this, "Error al iniciar sesión", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
