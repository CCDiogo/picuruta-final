export function Hero(){
    return(
        <section className="relative min-h-[80vh] flex items-center justify-center bg-muted">
            <div className="absolute inset-0">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-lg">
                    {/* Imagem hero do surf */}
                    </span>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/CdKBSwZSWT4"
                        title="Vídeo da Escola de Surf Picuruta Salazar"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}