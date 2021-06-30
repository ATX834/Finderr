<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Services\UserData;
use App\Services\PicturesGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class ApiController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    // Envoi des données entrées par utilisateur
    //  et traitement pour renvoyer sur l'appli
    public function user(UserRepository $userRepository): Response
    {
        dd($_REQUEST);
        return $this->json($userRepository->findThanksToSurvey($array));
    }

    /**
     * @Route("/category", name="category", methods={"GET"})
     */
    public function category(UserData $userData): Response
    {
        //Retourner les catégories principales et sous-catégories
        return $this->json([
            $userData->mainCategories, 
            $userData->subCategories
        ]);
    }

    /**
     * @Route("/language", name="language", methods={"GET"})
     */
    public function language(UserData $userData): Response
    {
        //retourner les langues parlées par les freelancers
        return $this->json([
            $userData->language,
        ]);
    }

    /**
     * @Route("/hourly-rate", name="hourly_rate", methods={"GET"})
     */
    public function hourlyRate(UserData $userData): Response
    {
        //retourner les taux horaires des freelancers
        return $this->json([
            $userData->hourlyRate,
        ]);
    }

    /**
     * @Route("/search", name="search",)
     */
    public function search(UserRepository $userRepository, PicturesGenerator $picturesGenerator ): Response
    {
        if(!empty($_GET))
        {
            if($_GET['hourlyRate'] === 'less than 10$ per hour')
            {
                $_GET['min'] = 0;
                $_GET['max'] = 10;
            }
            if($_GET['hourlyRate'] === 'less than 20$ per hour')
            {
                $_GET['min'] = 0;
                $_GET['max'] = 20;
            }
            if($_GET['hourlyRate'] === 'more than 20$ per hour')
            {
                $_GET['min'] = 20;
                $_GET['max'] = 1000;
            }
        }
        return $this->render('default/searchResults.html.twig', [
            'users' => $userRepository->findThanksToSurvey($_GET),
            'pictures' => $picturesGenerator->generateRandomImg()
        ]);
    }
}
