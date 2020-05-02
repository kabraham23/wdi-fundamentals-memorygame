// katies-air:first_homework katie$ cd~
// -bash: cd~: command not found
// katies-air:first_homework katie$ cd ~
// katies-air:~ katie$ cd Desktop
// katies-air:Desktop katie$ mkdir galaxy_far_far_away
// katies-air:Desktop katie$ mkdir death_star
// katies-air:Desktop katie$ cd death_star
// katies-air:death_star katie$ touch darth_vader.txt
// katies-air:death_star katie$ touch princess_leia.txt
// katies-air:death_star katie$ touch storm_trooper.txt
// katies-air:death_star katie$ cd ../galaxy_far_far_away/
// katies-air:galaxy_far_far_away katie$ touch luke.txt
// katies-air:galaxy_far_far_away katie$ ben_kenobi.txt
// -bash: ben_kenobi.txt: command not found
// katies-air:galaxy_far_far_away katie$ mkdir tatooine
// katies-air:galaxy_far_far_away katie$ mv luke.txt/tatooine
// usage: mv [-f | -i | -n] [-v] source target
//        mv [-f | -i | -n] [-v] source ... directory
// katies-air:galaxy_far_far_away katie$ cd tatooine
// katies-air:tatooine katie$ mkdir millenium_falcon
// katies-air:tatooine katie$ cd millenium_falcon/
// katies-air:millenium_falcon katie$ touch han_solo.txt
// katies-air:millenium_falcon katie$ touch chewbaca.txt
// katies-air:millenium_falcon katie$ cd ..
// katies-air:tatooine katie$ cd ..
// katies-air:galaxy_far_far_away katie$ cd tatooine 
// katies-air:tatooine katie$ touch ben_kenobi.txt
// katies-air:tatooine katie$ mv ben_kenobi.txt obi_wan.txt
// katies-air:tatooine katie$ ls
// luke.txt		millenium_falcon	obi_wan.txt
// katies-air:tatooine katie$ cd ../..
// katies-air:Desktop katie$ cd galaxy_far_far_away/
// katies-air:galaxy_far_far_away katie$ cd death_star/
// katies-air:death_star katie$ ls
// darth_vader.txt		princess_leia.txt	storm_trooper.txt
// katies-air:death_star katie$ cp storm_trooper.txt ../tatooine
// katies-air:death_star katie$ wpd
// -bash: wpd: command not found
// katies-air:death_star katie$ pwd
// /Users/katie/Desktop/galaxy_far_far_away/death_star
// katies-air:death_star katie$ cd ../tatooine
// katies-air:tatooine katie$ ls
// luke.txt		obi_wan.txt
// millenium_falcon	storm_trooper.txt
// katies-air:tatooine katie$ mv luke.txt/millenium_falcon
// usage: mv [-f | -i | -n] [-v] source target
//        mv [-f | -i | -n] [-v] source ... directory
// katies-air:tatooine katie$ 