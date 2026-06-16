"use client";

import { useEffect, useState } from "react";
import { MapPin, MessageCircle, Trophy } from "lucide-react";

const eventData = {
  festejada: "Ditta",
  fechaTexto: "18 de julio de 2026",
  horaTexto: "1:00 PM",
  fechaISO: "2026-07-18T13:00:00-06:00",
  lugar: "Volcán Maunaloa #5812",
  colonia: "Huentitán El Bajo, Guadalajara, Jalisco",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Volcan%20Maunaloa%205812%20Huentitan%20el%20Bajo%20Guadalajara%20Jalisco",
  whatsapp: "523344573899",
};

function getTimeLeft(targetDate: string) {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  return {
    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((difference / 1000 / 60) % 60),
    segundos: Math.floor((difference / 1000) % 60),
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventData.fechaISO));
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(eventData.fechaISO));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function confirmAttendance() {
    const text = `Hola Ditta, confirmo mi asistencia a tu celebración.

Nombre: ${guestName || "_____"}`;

    window.open(
      `https://wa.me/${eventData.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen bg-cream text-chivasBlue">
      <section className="fade-in relative min-h-screen overflow-hidden bg-chivasBlue text-white">
        <div className="absolute inset-0 bg-jersey opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,236,0.38),transparent_35%),linear-gradient(180deg,rgba(7,29,73,0.05),rgba(7,29,73,0.94))]" />

        <img
          src="/ditta-cover.png"
          alt="Ditta"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-90"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/85" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-gold">
            Reina del Rebaño
          </p>

          <h1 className="text-6xl font-bold tracking-tight text-white">
            {eventData.festejada}
          </h1>

          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/80">
            {eventData.fechaTexto} · {eventData.horaTexto}
          </p>

          <a
            href="#detalles"
            className="mt-9 rounded-full border border-white/70 bg-black/40 px-9 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition hover:bg-white hover:text-chivasBlue"
          >
            Ver invitación
          </a>
        </div>
      </section>

      <section className="bg-chivasBlue px-5 py-16 text-center text-white">
        <p className="text-xs uppercase tracking-[0.45em] text-gold">
          Invitación oficial
        </p>

        <h2 className="mx-auto mt-5 max-w-md text-4xl font-serif leading-tight">
          La afición está convocada
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/70">
          Acompáñanos a celebrar un día especial junto a {eventData.festejada}.
        </p>
      </section>

      <section id="detalles" className="slide-up px-5 py-12">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-chivasRed">
              Cuenta regresiva
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-chivasBlue">
              Falta poco para la fiesta
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <CountdownBox value={timeLeft.dias} label="Días" />
            <CountdownBox value={timeLeft.horas} label="Horas" />
            <CountdownBox value={timeLeft.minutos} label="Min" />
            <CountdownBox value={timeLeft.segundos} label="Seg" />
          </div>

          <div className="mt-10 rounded-[2rem] bg-chivasBlue p-6 text-center text-cream shadow-soft">
            <Trophy className="mx-auto mb-4 h-8 w-8 text-gold" />

            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Celebrando a
            </p>

            <h3 className="mt-3 text-3xl font-serif">
              {eventData.festejada}
            </h3>

            <p className="mt-4 text-sm leading-7 text-cream/80">
              Una tarde para compartir, brindar y celebrar con mucho corazón
              rojiblanco.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] border border-chivasBlue/10 bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-start gap-4">
              <div className="rounded-full bg-chivasRed p-3 text-white">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-chivasBlue">
                  Ubicación
                </h3>

                <p className="mt-1 text-sm leading-6 text-chivasBlue/75">
                  {eventData.lugar}
                  <br />
                  {eventData.colonia}
                </p>
              </div>
            </div>

            <div className="mb-5 overflow-hidden rounded-3xl">
              <iframe
                src="https://maps.google.com/maps?q=Volcan%20Maunaloa%205812%20Guadalajara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <a
              href={eventData.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-chivasBlue px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:scale-[1.01]"
            >
              Ver ubicación
            </a>
          </div>

          <div className="mt-10 rounded-[2rem] bg-chivasBlue p-6 text-center text-cream shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Confirmación
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Confirma tu asistencia
            </h3>

            <input
              type="text"
              placeholder="Escribe tu nombre"
              value={guestName}
              onChange={(event) => setGuestName(event.target.value)}
              className="mt-6 w-full rounded-full border border-white/20 bg-white px-5 py-4 text-center text-chivasBlue outline-none"
            />

            <button
              type="button"
              onClick={confirmAttendance}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-chivasRed px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:scale-[1.01]"
            >
              <MessageCircle className="h-5 w-5" />
              Confirmar por WhatsApp
            </button>
          </div>

          <div className="mt-10 rounded-[2rem] bg-white p-6 text-center shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-chivasRed">
              Código de vestimenta
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-chivasBlue">
              Rojo, blanco o azul
            </h3>

            <p className="mt-3 text-sm leading-6 text-chivasBlue/70">
              Los colores del Rebaño son bienvenidos. Elegante casual sugerido.
            </p>
          </div>

          <footer className="py-10 text-center text-sm text-chivasBlue/60">
            Hecho con cariño para celebrar a {eventData.festejada}.
          </footer>
        </div>
      </section>
    </main>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl bg-white p-3 text-center shadow-soft">
      <p className="text-2xl font-bold text-chivasRed">
        {String(value).padStart(2, "0")}
      </p>

      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-chivasBlue/60">
        {label}
      </p>
    </div>
  );
}
