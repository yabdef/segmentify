1. Projede pure javascript kullanıldı.
2. "Sepete Ekle Pop-Up"'ı ve "Kargo Bedava" alanı için ikon kütüphanesi kullanıldı (Font Awesome). İkon kütüphanesi haricinde herhangi bir kütüphaneye başvurulmadı.
3. Masaüstü ve mobil görünümün tasarımı projede verildiği şekilde yapıldı. (Maksimum mobil tarayıcı genişliği 1024px olarak seçildi)
4. Sepete Ekle Pop'upı bir süre sonra kaybolacak şekilde yazıldı.
5. Masaüstü görünümde slider içindeki ürünlerden herhangi birine hover olunduğunda "Sepete Ekle" butonunun animasyonlu olarak gözükmesi sağlandı.
6. "Ücretsiz Kargo" yazısı projede istendiği şekilde yalnızca shippingFee parametresi 'FREE' olan ürünlerde gösterildi.
7. Görseller yüklenirken lazy-load özelliği kullanıldı.
8. Fiyat gösterim formatı istendiği şekilde yapıldı.
9. Menüde yer alan sekmeler JSON dosyasından dinamik olarak çekildi. İlk 6 kategori gösterilecek şekilde ayarlandı.
10. Kategori isimleri ">" sembolünden faydalanılarak split metoduyla projede gösterilen şekilde çekildi.
11. Projede görsellerde görülenin haricinde çeşitli css efektleri kullanıldı.
	a. Slider'da yatay scroll için "scroll-behavior: smooth" özelliği; 'grab' metodu kullanıldığında inaktif, butonlar kullanıldığında aktif olacak şekilde kodlandı.
	b. Kategori menüsünde itemlere hover olunduğunda letter-spacing ve transition efektleri eklendi.
	c. Yazıların seçilmesi engellendi.
	d. Slider okları en sola ve en sağa gelindiğinde soluklaşacak şekilde tasarlandı (Daha fazla scroll edilemeyeceği manasında).
