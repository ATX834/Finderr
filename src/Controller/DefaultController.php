<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\PicturesGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{

    /**
     * @Route("/search-results", name="search_result",)
     */
    public function searchResults(UserRepository $userRepository, PicturesGenerator $picturesGenerator ): Response
    {
        $users = $userRepository->findAll();
        return $this->render('default/searchResults.html.twig', [
            'users' => $users,
            'pictures' => $picturesGenerator->generateRandomImg()
        ]);
    }

    /**
     * @Route("/{reactRouting}", name="default", defaults={"reactRouting": null})
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }
}
