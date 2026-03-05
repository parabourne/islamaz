export async function getPrayerTimes() {
  const res = await fetch(
    'http://api.aladhan.com/v1/timingsByCity?city=Baku&country=Azerbaijan&method=2',
    { next: { revalidate: 3600 } } // Hər saatda bir məlumatı yeniləyir
  );
  if (!res.ok) throw new Error('Məlumat alınmadı');
  return res.json();
}