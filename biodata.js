import head from "./head";
import '../view/biodata.css';

function biodata() {
    return(

        <div class="container">
        <img src="gambar/WhatsApp Image 2024-03-14 at 09.46.34.jpeg" height="320px" width="250px" align = "right"/>
        <table cellpadding="10px" width="550px">
            <tr>
                <td>Nama</td>
                <td>: Haritsah Naufaldy</td>
                <td rowspan="9"></td>
            </tr>
            <tr>
                <td>NIM</td>
                <td>: 12250110361</td>
            </tr>
            <tr>
                <td>Tempat/Tgl Lahir</td>
                <td>: Duri, 17 Maret 2004</td>
            </tr>
            <tr>
                <td>Agama</td>
                <td>: Islam</td>
            </tr>
            <tr>
                <td>Kelas</td>
                <td>: TIF A 22</td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td>: Jln. Bangau Sakti</td>
            </tr>
            <tr>
                <td>Jurusan</td>
                <td>: Teknik Informatika</td>
            </tr>
            <tr>
                <td>Fakultas</td>
                <td>: Sains dan Teknologi</td>
            </tr>
            <tr>
                <td>Nomor Telepon</td>
                <td>: 089512762326</td>
            </tr>
        </table>
    </div>

    );
}  

export default biodata;