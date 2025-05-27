package com.example.examenrafael

import android.app.Activity
import android.content.Intent
import android.graphics.Bitmap
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.view.Menu
import android.view.MenuItem
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import java.io.IOException

class RegistroActivity : AppCompatActivity() {
    private lateinit var img: ImageView
    private lateinit var nombre: EditText
    private lateinit var pass: EditText
    private var imageUri: Uri? = null

    companion object {
        const val PICK_IMAGE = 100
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_registro)

        img = findViewById(R.id.imageView)
        nombre = findViewById(R.id.editTextNombre)
        pass = findViewById(R.id.editTextPass)
        val btnImg = findViewById<Button>(R.id.btnImagen)
        val btnReg = findViewById<Button>(R.id.btnRegistrar)

        btnImg.setOnClickListener {
            val gallery = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
            startActivityForResult(gallery, PICK_IMAGE)
        }

        btnReg.setOnClickListener {
            if (imageUri == null) {
                Toast.makeText(this, "Debe cargar una imagen", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val empleado = Empleado(nombre.text.toString(), pass.text.toString(), imageUri.toString())
            val intent = Intent(this, LoginActivity::class.java)
            intent.putExtra("empleado", empleado)
            startActivity(intent)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == PICK_IMAGE && resultCode == Activity.RESULT_OK && data != null) {
            imageUri = data.data
            try {
                val bitmap: Bitmap = MediaStore.Images.Media.getBitmap(this.contentResolver, imageUri)
                img.setImageBitmap(bitmap)
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.registro_menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.menu_login -> {
                startActivity(Intent(this, LoginActivity::class.java))
                return true
            }
            R.id.menu_inicio -> {
                startActivity(Intent(this, MainActivity::class.java))
                return true
            }
        }
        return super.onOptionsItemSelected(item)
    }
}
