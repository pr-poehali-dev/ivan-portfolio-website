import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

const Index = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: '1',
      title: 'Монтаж электропроводки в квартире',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: '/placeholder.svg',
      description: 'Полный монтаж проводки в 3-комнатной квартире'
    },
    {
      id: '2',
      title: 'Установка электрощита',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: '/placeholder.svg',
      description: 'Сборка и установка распределительного щита'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: '',
    url: '',
    description: ''
  });

  const handleAddVideo = () => {
    if (newVideo.title && newVideo.url) {
      const video: Video = {
        id: Date.now().toString(),
        title: newVideo.title,
        url: newVideo.url,
        thumbnail: '/placeholder.svg',
        description: newVideo.description
      };
      setVideos([...videos, video]);
      setNewVideo({ title: '', url: '', description: '' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold">Электрик Иван</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#videos" className="hover:text-primary transition-colors">Видео</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Icon name="MapPin" className="text-primary" size={20} />
                <span className="text-sm font-medium text-primary">Пенза</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Профессиональный
                <span className="block text-primary">электромонтаж</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Качественные электромонтажные работы любой сложности. 
                Более 10 лет опыта. Гарантия на все работы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 group">
                  <Icon name="Phone" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                  +7 (996) 804-12-46
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Video" className="mr-2" size={20} />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/72cfd434-cf6d-462c-be4b-071afab02469/files/fb4c84ec-e26c-465f-a7cc-6685e6188f7e.jpg"
                alt="Электромонтажные работы"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Мои услуги</h2>
          <p className="text-center text-muted-foreground mb-12">Полный спектр электромонтажных работ</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Home', title: 'Электрика в квартирах', desc: 'Монтаж проводки, розеток, выключателей' },
              { icon: 'Building', title: 'Коммерческие объекты', desc: 'Электроснабжение офисов и магазинов' },
              { icon: 'Lightbulb', title: 'Освещение', desc: 'Установка светильников и систем освещения' },
              { icon: 'Shield', title: 'Электрощиты', desc: 'Сборка и монтаж распределительных щитов' },
              { icon: 'Cable', title: 'Прокладка кабеля', desc: 'Открытая и скрытая прокладка' },
              { icon: 'Sparkles', title: 'Ремонт', desc: 'Устранение неисправностей и замена' }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group cursor-pointer"
              >
                <Icon name={service.icon} className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Видео моих работ</h2>
              <p className="text-muted-foreground">Смотрите примеры выполненных проектов</p>
            </div>
            <Button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="gap-2"
            >
              <Icon name={showAddForm ? "X" : "Plus"} size={20} />
              {showAddForm ? 'Отмена' : 'Добавить видео'}
            </Button>
          </div>

          {showAddForm && (
            <Card className="p-6 mb-8 animate-slide-up">
              <h3 className="text-xl font-bold mb-4">Новое видео</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Название</label>
                  <Input 
                    placeholder="Например: Монтаж электропроводки"
                    value={newVideo.title}
                    onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Ссылка на видео (YouTube embed)</label>
                  <Input 
                    placeholder="https://www.youtube.com/embed/..."
                    value={newVideo.url}
                    onChange={(e) => setNewVideo({...newVideo, url: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Описание</label>
                  <Textarea 
                    placeholder="Краткое описание работы"
                    value={newVideo.description}
                    onChange={(e) => setNewVideo({...newVideo, description: e.target.value})}
                  />
                </div>
                <Button onClick={handleAddVideo} className="w-full">
                  <Icon name="Check" className="mr-2" size={20} />
                  Добавить видео
                </Button>
              </div>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-muted">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Zap" className="mx-auto text-primary mb-6 animate-pulse" size={56} />
          <h2 className="text-4xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Свяжитесь со мной для консультации и расчёта стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 gap-3 group">
              <Icon name="Phone" className="group-hover:rotate-12 transition-transform" size={24} />
              <div className="text-left">
                <div className="text-xs opacity-80">Звоните прямо сейчас</div>
                <div className="font-bold">+7 (996) 804-12-46</div>
              </div>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 gap-2">
              <Icon name="MessageCircle" size={24} />
              Написать в WhatsApp
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="MapPin" size={20} />
            <span>Работаю в Пензе и области</span>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Электрик Иван. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
