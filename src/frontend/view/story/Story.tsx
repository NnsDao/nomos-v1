import React from 'react';
import marketplace from '../../assets/home/marketplace.png';
import google from '../../assets/home/google.png';
import window from '../../assets/home/window.png';
import app from '../../assets/home/app.png';

const Index = () => {
    const inactiveClass = 'text-white opacity-50 transform hover:scale-90 cursor-pointer';
    return (
        <>
            <div>
                <div className="introduction-wrapper ">
                    <div className="max-w-1200px m-auto flex flex-col justify-center items-center">
                        <div className="text-7xl mt-60 mb-100px max-w-900px">Introduction à la notion de grille</div>
                        <div className="min-w-1000px text-left mb-64 ">
                            <p className="mb-6">
                                Bien que les grilles proviennent des imprimés, elles trouvent leur application partout autour de nous, de l'architecture à l'ingénierie. Une grille bien conçue peut fournir une
                                structure et une cohérence, aider à mettre de l'ordre dans le chaos et créer une disposition plus harmonieuse. Les interfaces n'étant plus rigides, nos systèmes de grille ne le sont
                                plus également. Les grilles sont idéales pour concevoir des interfaces dynamiques au-delà d'un seul support ou d'une seule taille d'écran. De la plus petite à la plus grande, les
                                grilles vous couvrent.
                            </p>
                            <p className="mb-6">
                                Une grille se compose de trois éléments : des colonnes (ou lignes), des Espace intercolonnes (gutters) et des marges. Pour la mise en œuvre, il est préférable de définir chacun d'entre
                                eux à l'aide de pourcentages, plutôt que de valeurs fixes. Cela permettra au contenu de s'adapter dynamiquement à n'importe quelle taille d'écran. Les colonnes de la grille comportent
                                du contenu :
                            </p>
                            <p className="mb-6">Les Gutters ou Espace intercolonnes sont l'espace maintenu entre deux colonnes. Elles aident à séparer le contenu :</p>
                            <p className="mb-6">Les marges sont l'espace entre le contenu et les bords de l'écran. Elles aident à encadrer et à créer de l'espace autour du contenu :</p>
                        </div>
                    </div>

                    <div className={'w-840px mx-auto flex justify-between items-start  text-white '}>
                        <img src={marketplace} width={'135px'} height={'45px'} alt="" />
                        <img src={window} width={'135px'} height={'45px'} alt="" />
                        <img src={google} width={'135px'} height={'45px'} alt="" />
                        <img src={app} width={'135px'} height={'45px'} alt="" />
                    </div>
                    <div className={'w-840px mx-auto mt-200px mb-4 flex justify-between items-start  text-white '}>

                        <span className={inactiveClass}>Nomos</span>
                        <span className={inactiveClass}>Story</span>
                        <span className={inactiveClass}>VRG</span>
                        <span className={inactiveClass}>Partners</span>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Index;
